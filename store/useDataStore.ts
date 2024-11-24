import { create } from "zustand";

export enum FileStatus {
  OPEN = "open",
  CLOSED = "closed",
}

export interface FileItem {
  id: number;
  title: string;
  status: FileStatus;
  type: "X" | "Y";
  numeric1: number;
  text1: string;
  text2: string;
  text3: string;
  numeric2: number;
  date: string;
}

interface MockDataState {
  mockData: FileItem[];
  toggleStatus: (id: number) => void;
  updateFile: (id: number, updatedFile: Partial<FileItem>) => void;
}

const useDataStore = create<MockDataState>((set) => ({
  mockData: [
    {
      id: 1,
      title: "Project Alpha",
      status: FileStatus.OPEN,
      type: "X",
      numeric1: 5,
      text1: "example1",
      text2: "example2",
      text3: "example3",
      numeric2: 10,
      date: new Date().toISOString(),
    },
    {
      id: 2,
      title: "Budget Report",
      status: FileStatus.CLOSED,
      type: "Y",
      numeric1: 3,
      text1: "sample1",
      text2: "sample2",
      text3: "sample3",
      numeric2: 6,
      date: new Date().toISOString(),
    },
    {
      id: 3,
      title: "Meeting Notes",
      status: FileStatus.CLOSED,
      type: "X",
      numeric1: 8,
      text1: "test1",
      text2: "test2",
      text3: "test3",
      numeric2: 12,
      date: new Date().toISOString(),
    },
    {
      id: 4,
      title: "Research Data",
      status: FileStatus.CLOSED,
      type: "Y",
      numeric1: 2,
      text1: "data1",
      text2: "data2",
      text3: "data3",
      numeric2: 4,
      date: new Date().toISOString(),
    },
    {
      id: 5,
      title: "Development Plan",
      status: FileStatus.CLOSED,
      type: "Y",
      numeric1: 7,
      text1: "info1",
      text2: "info2",
      text3: "info3",
      numeric2: 14,
      date: new Date().toISOString(),
    },
  ],
  toggleStatus: (id: number) =>
    set((state) => ({
      mockData: state.mockData.map((item) =>
        item.id === id
          ? {
              ...item,
              status:
                item.status === FileStatus.OPEN
                  ? FileStatus.CLOSED
                  : FileStatus.OPEN,
            }
          : item
      ),
    })),
  updateFile: (id: number, updatedFile: Partial<FileItem>) =>
    set((state) => ({
      mockData: state.mockData.map((item) =>
        item.id === id ? { ...item, ...updatedFile } : item
      ),
    })),
}));

export default useDataStore;
