import { SvgIcon } from '@mui/material';

export interface ChannelDetailProps {
    channelDetail: {
      statistics?: {
        subscriberCount: string;
      };
      id: {
        channelId: string;
      };
      snippet: {
        title: string;
        thumbnails?: {
          high?: {
            url: string;
          };
        };
        channelId?: string;
        channelTitle?: string;
      };
    };
    marginTop?: string;
  }
  export interface SideBarProps {
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
  }

  export interface simpleInt {
    id: {
      videoId: string;
      channelId: string;
    };
    snippet: {
      title: string;
      thumbnails?: {
        high?: {
          url: string;
        };
      };
      channelId?: string;
      channelTitle?: string;
    };
    label: string;
    key: string;
  }
  export interface VideosProps {
    videos: simpleInt[];
    direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  }
  export interface Category {
    name: string;
    icon: typeof SvgIcon;
  }