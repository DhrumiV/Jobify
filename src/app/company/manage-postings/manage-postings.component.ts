import { Component, OnInit } from '@angular/core';

interface Candidate {
  name: string;
  contact: string;
}

interface ModalData {
  status: string;
  offerSent?: Date;
  offerAccepted?: Date;
  details: string;
  candidates: Candidate[];
  iconClass: string;
}

interface Post {
  title: string;
  views: number;
  applications: number;
  saves: number;
}

interface PostPerformance {
  views: number;
  applications: number;
  saves: number;
  shares: number;
  conversionRate: number;
  posts: Post[];
}

interface TeamActivity {
  timestamp: Date;
  member: string;
  action: string;
}

@Component({
  selector: 'app-manage-postings',
  templateUrl: './manage-postings.component.html',
  styleUrls: ['./manage-postings.component.css']
})
export class ManagePostingsComponent implements OnInit {
  // Offer status summary
  offerStatus = {
    totalOffersSent:     2,
    totalAccepted:       2,
    totalRejected:       1,
    totalPending:        2
  };

  // Candidate lists grouped by status
  detailedData: Record<string, Candidate[]> = {
    sent: [
      { name: 'John Doe',    contact: '+91-98765-43210' },
      { name: 'Jane Smith',  contact: '+91-91234-56789' }
    ],
    accepted: [
      { name: 'Alice Taylor', contact: '+91-99887-66554' },
      { name: 'Bob Patel',    contact: '+91-88776-55443' }
    ],
    rejected: [
      { name: 'Charlie Brown', contact: '+91-77665-44332' }
    ],
    pending: [
      { name: 'Emma Williams', contact: '+91-66554-33221' },
      { name: 'George Clark',  contact: '+91-55443-22110' }
    ]
  };

  // Post performance details
  postPerformance: PostPerformance = {
    views:           4500,
    applications:    320,
    saves:           120,
    shares:          80,
    conversionRate:  (320 / 4500) * 100,
    posts: [
      { title: 'Frontend Developer', views: 1500, applications: 120, saves: 50 },
      { title: 'Backend Engineer',    views: 1200, applications:  90, saves: 40 },
      { title: 'UI/UX Designer',      views:  800, applications:  60, saves: 20 }
    ]
  };

  // Team activity log entries
  teamActivities: TeamActivity[] = [
    { timestamp: new Date('2025-04-27T10:15:00'), member: 'Amit Shah',   action: 'Posted new job: Frontend Developer' },
    { timestamp: new Date('2025-04-27T09:45:00'), member: 'Sneha Patel', action: 'Updated Backend Engineer description' },
    { timestamp: new Date('2025-04-26T16:30:00'), member: 'Rahul Mehta', action: 'Reviewed application: John Doe' },
    { timestamp: new Date('2025-04-26T14:20:00'), member: 'Amit Shah',   action: 'Shared job on LinkedIn' },
    { timestamp: new Date('2025-04-25T11:10:00'), member: 'Sneha Patel', action: 'Closed job: UI/UX Designer' }
  ];

  // Modal state & data
  isModalVisible = false;
  modalData: ModalData = { status: '', details: '', candidates: [], iconClass: '' };

  ngOnInit(): void {
    // nothing else needed here
  }

  /** Opens modal, loads both the status details and candidate list */
  openDetailedView(status: string): void {
    this.modalData = {
      ...this.getDetailedData(status),
      candidates: this.detailedData[status] || []
    };
    this.isModalVisible = true;
  }

  /** Closes the modal */
  closeModal(): void {
    this.isModalVisible = false;
  }

  /** Calculates the acceptance rate for the summary bar */
  getOfferAcceptanceRate(): number {
    const sent = this.offerStatus.totalOffersSent;
    const accepted = this.offerStatus.totalAccepted;
    return sent > 0 ? (accepted / sent) * 100 : 0;
  }

  /** Provides the detailed modal content (minus candidates) */
  private getDetailedData(status: string): Omit<ModalData,'candidates'> {
    const now = new Date();
    switch (status) {
      case 'sent':
        return {
          status:    'Sent',
          offerSent: now,
          details:   'These candidates have been sent offer letters.',
          iconClass: 'bi-envelope-fill'
        };
      case 'accepted':
        return {
          status:        'Accepted',
          offerSent:     new Date(now.getTime() - 7 * 24 * 3600 * 1000),
          offerAccepted: now,
          details:       'These candidates accepted your offer.',
          iconClass:     'bi-check-circle-fill'
        };
      case 'rejected':
        return {
          status:    'Rejected',
          offerSent: new Date(now.getTime() - 14 * 24 * 3600 * 1000),
          details:   'These candidates declined the offer.',
          iconClass: 'bi-x-circle-fill'
        };
      case 'pending':
        return {
          status:    'Pending',
          offerSent: new Date(now.getTime() - 3 * 24 * 3600 * 1000),
          details:   'Awaiting response from these candidates.',
          iconClass: 'bi-clock-fill'
        };
      default:
        return { status, details: '', iconClass: '' };
    }
  }
}
