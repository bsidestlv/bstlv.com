// Sessionize API types
export interface SessionizeSpeaker {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  bio: string;
  tagLine: string;
  profilePicture: string;
  links: {
    title: string;
    url: string;
    linkType: string;
  }[];
  sessions: string[];
}

export interface SessionizeSession {
  id: string;
  title: string;
  description: string;
  startsAt: string;
  endsAt: string;
  isServiceSession: boolean;
  isPlenumSession: boolean;
  speakers: string[];
  room: string;
  categoryItems: {
    id: string;
    name: string;
    categoryId: string;
    sort: number;
  }[];
}

export interface SessionizeRoom {
  id: string;
  name: string;
  sort: number;
}

export interface SessionizeGrid {
  date: string;
  rooms: {
    id: string;
    name: string;
    sessions: {
      id: string;
      title: string;
      description: string;
      startsAt: string;
      endsAt: string;
      speakers: {
        id: string;
        name: string;
      }[];
      room: string;
    }[];
  }[];
}

// Sessionize API configuration
const SESSIONIZE_BASE_URL = 'https://sessionize.com/api/v2';

// BSidesTLV event ID - this would need to be configured based on the actual event
const BSIDESTLV_EVENT_ID = process.env.NEXT_PUBLIC_SESSIONIZE_EVENT_ID || 'demo'; // Fallback to demo

export class SessionizeAPI {
  private eventId: string;

  constructor(eventId: string = BSIDESTLV_EVENT_ID) {
    this.eventId = eventId;
  }

  /**
   * Fetch speakers from Sessionize API
   */
  async getSpeakers(): Promise<SessionizeSpeaker[]> {
    try {
      const response = await fetch(`${SESSIONIZE_BASE_URL}/${this.eventId}/view/speakers`, {
        next: { revalidate: 3600 } // Cache for 1 hour
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch speakers: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching speakers from Sessionize:', error);
      return [];
    }
  }

  /**
   * Fetch sessions from Sessionize API
   */
  async getSessions(): Promise<SessionizeSession[]> {
    try {
      const response = await fetch(`${SESSIONIZE_BASE_URL}/${this.eventId}/view/sessions`, {
        next: { revalidate: 3600 } // Cache for 1 hour
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch sessions: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching sessions from Sessionize:', error);
      return [];
    }
  }

  /**
   * Fetch agenda grid from Sessionize API
   */
  async getGrid(): Promise<SessionizeGrid[]> {
    try {
      const response = await fetch(`${SESSIONIZE_BASE_URL}/${this.eventId}/view/gridtable`, {
        next: { revalidate: 3600 } // Cache for 1 hour
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch grid: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching grid from Sessionize:', error);
      return [];
    }
  }

  /**
   * Fetch rooms from Sessionize API
   */
  async getRooms(): Promise<SessionizeRoom[]> {
    try {
      const response = await fetch(`${SESSIONIZE_BASE_URL}/${this.eventId}/view/rooms`, {
        next: { revalidate: 3600 } // Cache for 1 hour
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch rooms: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching rooms from Sessionize:', error);
      return [];
    }
  }
}

// Default instance
export const sessionizeAPI = new SessionizeAPI();

// Utility functions for fallback data when API is unavailable
export const getFallbackSpeakers = (): SessionizeSpeaker[] => [
  {
    id: 'fallback-1',
    firstName: 'Conference',
    lastName: 'Speaker',
    fullName: 'Conference Speaker',
    bio: 'Speaker details will be announced once the event date is confirmed.',
    tagLine: 'Cybersecurity Expert',
    profilePicture: '',
    links: [],
    sessions: []
  }
];

export const getFallbackSessions = (): SessionizeSession[] => [
  {
    id: 'fallback-session-1',
    title: 'Opening Keynote',
    description: 'Conference opening and keynote presentation',
    startsAt: '2025-06-26T08:30:00',
    endsAt: '2025-06-26T09:30:00',
    isServiceSession: false,
    isPlenumSession: true,
    speakers: ['fallback-1'],
    room: 'Main Auditorium',
    categoryItems: []
  }
];

export const getFallbackGrid = (): SessionizeGrid[] => [
  {
    date: '2025-06-26',
    rooms: [
      {
        id: 'main-auditorium',
        name: 'Main Auditorium',
        sessions: [
          {
            id: 'fallback-session-1',
            title: 'Event Schedule Coming Soon',
            description: 'Detailed schedule will be published once the new event date is confirmed.',
            startsAt: '2025-06-26T08:30:00',
            endsAt: '2025-06-26T19:00:00',
            speakers: [],
            room: 'Main Auditorium'
          }
        ]
      }
    ]
  }
];