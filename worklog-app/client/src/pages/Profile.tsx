import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { Save, User, Briefcase, GraduationCap, Camera } from 'lucide-react'
import { profileApi } from '@/services/api'
import { useAppStore } from '@/store'
import { useTranslation } from '@/i18n/useTranslation'
import type { ProfileFormData } from '@/types'

export default function Profile() {
  const { profile, loadProfile, updateProfile } = useAppStore()
  const { t, language } = useTranslation()
  const [saving, setSaving] = useState(false)
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null)

  const { register, handleSubmit, reset, formState: { errors, isDirty } } = useForm<ProfileFormData>()

  useEffect(() => {
    if (profile) {
      reset({
        fullName: profile.fullName,
        phone: profile.phone,
        email: profile.email,
        studentId: profile.studentId,
        university: profile.university,
        major: profile.major,
        company: profile.company,
        position: profile.position,
        internshipStartDate: profile.internshipStartDate,
        internshipEndDate: profile.internshipEndDate,
        class: profile.class,
      })
      if (profile.avatar) setAvatarPreview(profile.avatar)
    }
  }, [profile, reset])

  const onSubmit = async (data: ProfileFormData) => {
    setSaving(true)
    try {
      const updated = await profileApi.update(data)
      updateProfile(updated)
      toast.success(language === 'vi' ? 'Cập nhật hồ sơ thành công ✓' : 'Profile updated successfully ✓')
    } catch (error) {
      toast.error((error as Error).message)
    } finally {
      setSaving(false)
    }
  }

  const handleAvatarChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = async (ev) => {
      const base64 = ev.target?.result as string
      setAvatarPreview(base64)
      try {
        const updated = await profileApi.uploadAvatar(base64)
        updateProfile(updated)
        toast.success(language === 'vi' ? 'Cập nhật ảnh đại diện thành công ✓' : 'Avatar updated successfully ✓')
      } catch {
        toast.error(language === 'vi' ? 'Lỗi tải lên ảnh đại diện' : 'Failed to upload avatar')
      }
    }
    reader.readAsDataURL(file)
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
      <div className="page-header">
        <h1 className="page-title">{t.profile.title}</h1>
        <p className="page-subtitle">{t.profile.subtitle}</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Avatar */}
        <div className="section-card">
          <div className="flex items-center gap-5">
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center overflow-hidden">
                {avatarPreview ? (
                  <img src={avatarPreview} alt="Avatar" className="w-full h-full object-cover" />
                ) : (
                  <span className="text-white text-2xl font-bold">
                    {profile?.fullName?.charAt(0)?.toUpperCase() || 'U'}
                  </span>
                )}
              </div>
              <label className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center cursor-pointer hover:bg-primary/90 transition-colors">
                <Camera className="w-3.5 h-3.5" />
                <input type="file" accept="image/*" className="hidden" onChange={handleAvatarChange} />
              </label>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{profile?.fullName || (language === 'vi' ? 'Họ và tên của bạn' : 'Your Name')}</h3>
              <p className="text-sm text-muted-foreground">{profile?.email || 'your@email.com'}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{profile?.company || (language === 'vi' ? 'Doanh nghiệp thực tập' : 'Company')}</p>
            </div>
          </div>
        </div>

        {/* Personal Information */}
        <div className="section-card">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <User className="w-4 h-4 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground">{t.profile.personalInfo}</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="form-label">{t.profile.fullName} <span className="text-destructive">*</span></label>
              <input
                {...register('fullName', { required: language === 'vi' ? 'Vui lòng nhập họ tên' : 'Full name is required' })}
                className={`form-input ${errors.fullName ? 'border-destructive' : ''}`}
                placeholder="Nguyen Van A"
              />
              {errors.fullName && <p className="form-error">{errors.fullName.message}</p>}
            </div>
            <div>
              <label className="form-label">{t.profile.studentId}</label>
              <input {...register('studentId')} className="form-input" placeholder="B2100000" />
            </div>
            <div>
              <label className="form-label">{t.profile.phone}</label>
              <input {...register('phone')} className="form-input" placeholder="0912345678" />
            </div>
            <div>
              <label className="form-label">{t.profile.email} <span className="text-destructive">*</span></label>
              <input
                {...register('email', {
                  required: language === 'vi' ? 'Vui lòng nhập email' : 'Email is required',
                  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: language === 'vi' ? 'Email không hợp lệ' : 'Invalid email' }
                })}
                className={`form-input ${errors.email ? 'border-destructive' : ''}`}
                placeholder="your@email.com"
                type="email"
              />
              {errors.email && <p className="form-error">{errors.email.message}</p>}
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="section-card">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-8 h-8 rounded-lg bg-violet-50 flex items-center justify-center">
              <GraduationCap className="w-4 h-4 text-violet-600" />
            </div>
            <h3 className="font-semibold text-foreground">{t.profile.education}</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label className="form-label">{t.profile.university}</label>
              <input {...register('university')} className="form-input" placeholder="Ho Chi Minh City University of Technology and Education" />
            </div>
            <div>
              <label className="form-label">{t.profile.major}</label>
              <input {...register('major')} className="form-input" placeholder="Information Technology" />
            </div>
            <div>
              <label className="form-label">{t.profile.class}</label>
              <input {...register('class')} className="form-input" placeholder="AWS092026" />
            </div>
          </div>
        </div>

        {/* Internship */}
        <div className="section-card">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
              <Briefcase className="w-4 h-4 text-emerald-600" />
            </div>
            <h3 className="font-semibold text-foreground">{t.profile.internshipInfo}</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label className="form-label">{t.profile.company}</label>
              <input {...register('company')} className="form-input" placeholder="Amazon Web Services Viet Nam Company Limited" />
            </div>
            <div className="sm:col-span-2">
              <label className="form-label">{t.profile.position}</label>
              <input {...register('position')} className="form-input" placeholder="Workforce Bootcamp - First Cloud AI Journey" />
            </div>
            <div>
              <label className="form-label">{t.profile.startDate} <span className="text-destructive">*</span></label>
              <input
                {...register('internshipStartDate', { required: language === 'vi' ? 'Vui lòng chọn ngày bắt đầu' : 'Start date is required' })}
                type="date"
                className={`form-input ${errors.internshipStartDate ? 'border-destructive' : ''}`}
              />
              {errors.internshipStartDate && <p className="form-error">{errors.internshipStartDate.message}</p>}
            </div>
            <div>
              <label className="form-label">{t.profile.endDate}</label>
              <input {...register('internshipEndDate')} type="date" className="form-input" />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={saving || !isDirty}
            className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Save className="w-4 h-4" />
            {saving ? t.common.saving : t.profile.saveProfile}
          </button>
        </div>
      </form>
    </div>
  )
}
