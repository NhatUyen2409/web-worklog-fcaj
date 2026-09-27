import { createContext, useContext, useState, useEffect, useRef } from 'react';
import { profileData as defaultProfile } from '../data/profileData';
import { teamData as defaultTeam } from '../data/teamData';
import { workshopData as defaultWorkshop } from '../data/workshopData';
import { worklogData as defaultWorklog } from '../data/worklogData';
import { projectsData as defaultProjects } from '../data/projectsData';

const STORAGE_KEY = 'fcaj_site_editable_data';

const getDefaultData = () => ({
  home: {
    name: defaultProfile.name,
    role: defaultProfile.role,
    university: defaultProfile.university,
    major: defaultProfile.major,
    program: defaultProfile.program,
    intro: {
      vi: 'Sinh viên chuyên ngành An toàn Thông tin tại Đại học FPT và thực tập sinh kỹ thuật tại chương trình AWS First Cloud AI Journey 2026. Đam mê thiết kế kiến trúc đám mây an toàn, DevSecOps, phòng thủ mạng và phân tích mối đe dọa trên nền tảng AWS Well-Architected Framework.',
      en: 'Final-year Information Assurance undergraduate at FPT University and engineering trainee in the AWS First Cloud AI Journey 2026. Passionate about secure cloud architectures, DevSecOps, network defense, and threat analysis aligned with the AWS Well-Architected Framework.',
    },
    avatar: '👩‍💻',
  },
  team: defaultTeam,
  workshop: defaultWorkshop,
  worklog: defaultWorklog,
  projects: defaultProjects,
});

const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Failed to load site data from localStorage:', e);
    }
    return getDefaultData();
  });

  const [isEditMode, setIsEditMode] = useState(false);
  const [autoSave, setAutoSave] = useState(true);
  const [savedNotification, setSavedNotification] = useState('');

  // Snapshot for cancel functionality
  const snapshotRef = useRef(data);

  // Auto-save when data changes if autoSave is true
  useEffect(() => {
    if (autoSave) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      } catch (e) {
        console.error('Failed to auto-save:', e);
      }
    }
  }, [data, autoSave]);

  const showToast = (msg) => {
    setSavedNotification(msg);
    setTimeout(() => setSavedNotification(''), 3000);
  };

  const startEdit = () => {
    snapshotRef.current = JSON.parse(JSON.stringify(data));
    setIsEditMode(true);
    showToast('Chế độ chỉnh sửa đã bật · Edit mode enabled');
  };

  const saveData = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      snapshotRef.current = JSON.parse(JSON.stringify(data));
      setIsEditMode(false);
      showToast('Đã lưu dữ liệu thành công! · Saved to localStorage');
    } catch (e) {
      showToast('Lỗi lưu dữ liệu: ' + e.message);
    }
  };

  const cancelEdit = () => {
    if (snapshotRef.current) {
      setData(JSON.parse(JSON.stringify(snapshotRef.current)));
    }
    setIsEditMode(false);
    showToast('Đã hủy thay đổi · Changes discarded');
  };

  // Home updates
  const updateHome = (fields) => {
    setData(prev => ({
      ...prev,
      home: { ...prev.home, ...fields },
    }));
  };

  // Team updates
  const updateTeam = (fields) => {
    setData(prev => ({
      ...prev,
      team: { ...prev.team, ...fields },
    }));
  };

  const updateTeamMember = (index, fields) => {
    setData(prev => {
      const newMembers = [...prev.team.members];
      newMembers[index] = { ...newMembers[index], ...fields };
      return {
        ...prev,
        team: { ...prev.team, members: newMembers },
      };
    });
  };

  // Workshop updates
  const updateWorkshop = (fields) => {
    setData(prev => ({
      ...prev,
      workshop: { ...prev.workshop, ...fields },
    }));
  };

  const updateWorkshopLab = (index, fields) => {
    setData(prev => {
      const newSections = [...prev.workshop.sections];
      newSections[index] = { ...newSections[index], ...fields };
      return {
        ...prev,
        workshop: { ...prev.workshop, sections: newSections },
      };
    });
  };

  // Worklog updates
  const updateWeek = (weekNumber, fields) => {
    setData(prev => {
      const newWorklog = prev.worklog.map(w => (w.week === weekNumber ? { ...w, ...fields } : w));
      return { ...prev, worklog: newWorklog };
    });
  };

  const addWeekTask = (weekNumber, taskText) => {
    if (!taskText || !taskText.trim()) return;
    setData(prev => {
      const newWorklog = prev.worklog.map(w => {
        if (w.week === weekNumber) {
          const currentTasks = w.tasks || [];
          return { ...w, tasks: [...currentTasks, taskText.trim()] };
        }
        return w;
      });
      return { ...prev, worklog: newWorklog };
    });
    showToast(`Đã thêm nhiệm vụ mới vào Tuần ${weekNumber}`);
  };

  const deleteWeekTask = (weekNumber, taskIndex) => {
    setData(prev => {
      const newWorklog = prev.worklog.map(w => {
        if (w.week === weekNumber) {
          const newTasks = [...w.tasks];
          newTasks.splice(taskIndex, 1);
          return { ...w, tasks: newTasks };
        }
        return w;
      });
      return { ...prev, worklog: newWorklog };
    });
    showToast(`Đã xóa nhiệm vụ khỏi Tuần ${weekNumber}`);
  };

  // Projects updates
  const updateProject = (index, fields) => {
    setData(prev => {
      const newProjects = [...prev.projects];
      newProjects[index] = { ...newProjects[index], ...fields };
      return { ...prev, projects: newProjects };
    });
  };

  // Export JSON
  const exportJSON = () => {
    try {
      const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
        JSON.stringify(data, null, 2)
      )}`;
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute('href', jsonString);
      downloadAnchor.setAttribute('download', 'fcaj_portfolio_data.json');
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
      showToast('Đã tải xuống tệp JSON · Exported JSON');
    } catch (e) {
      showToast('Lỗi xuất tệp: ' + e.message);
    }
  };

  // Import JSON
  const importJSON = (jsonString) => {
    try {
      const parsed = JSON.parse(jsonString);
      if (!parsed.home || !parsed.team || !parsed.workshop || !parsed.worklog || !parsed.projects) {
        throw new Error('Cấu trúc JSON không hợp lệ / Invalid JSON structure');
      }
      setData(parsed);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
      showToast('Đã nhập dữ liệu thành công! · Imported JSON');
    } catch (e) {
      showToast('Lỗi nhập dữ liệu: ' + e.message);
    }
  };

  // Reset to original default data
  const resetData = () => {
    const defaultData = getDefaultData();
    setData(defaultData);
    localStorage.removeItem(STORAGE_KEY);
    showToast('Đã khôi phục dữ liệu mặc định · Reset to default data');
  };

  return (
    <DataContext.Provider
      value={{
        data,
        isEditMode,
        startEdit,
        saveData,
        cancelEdit,
        toggleEditMode: () => (isEditMode ? saveData() : startEdit()),
        autoSave,
        setAutoSave,
        updateHome,
        updateTeam,
        updateTeamMember,
        updateWorkshop,
        updateWorkshopLab,
        updateWeek,
        addWeekTask,
        deleteWeekTask,
        updateProject,
        exportJSON,
        importJSON,
        resetData,
        savedNotification,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const ctx = useContext(DataContext);
  if (!ctx) throw new Error('useData must be used within DataProvider');
  return ctx;
};
