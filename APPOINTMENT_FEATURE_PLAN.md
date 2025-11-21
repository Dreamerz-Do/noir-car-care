# Appointment Scheduling Feature Plan

## Overview

Enable clients to self-schedule appointments via a calendar widget, with a secure admin panel for the business owner to manage bookings.

### Requirements
1. **Client Booking** - Calendar widget to select date/time and book appointments
2. **Backend** - Secure API to store and retrieve appointments (Firebase)
3. **Admin Panel** - Protected interface for CRUD operations on appointments

---

## Tech Stack

| Component | Technology | Notes |
|-----------|------------|-------|
| Database | Firebase Firestore | Already installed, real-time sync |
| Authentication | Firebase Auth | Email/password for admin |
| Calendar Widget | FullCalendar | Most mature, framework-agnostic |
| Routing | Solid Router | For admin protected route |
| Frontend | Solid.js | Existing stack |
| Email Service | Resend | Modern API, 3k emails/month free |

---

## Implementation Phases

### Phase 1: Firebase Setup
- [ ] Create Firebase project in console
- [ ] Configure Firestore database
- [ ] Set up Firebase Authentication (email/password)
- [ ] Create `src/lib/firebase.ts` config file
- [ ] Define Firestore security rules

### Phase 2: Client Booking Calendar
- [ ] Install FullCalendar packages
- [ ] Create `BookingCalendar.tsx` component
- [ ] Fetch existing appointments (show unavailable slots)
- [ ] Create booking form modal (name, phone, email, service, date/time)
- [ ] Save appointments to Firestore

### Phase 3: Admin Dashboard
- [ ] Install `@solidjs/router` for routing
- [ ] Create login page (`/admin/login`)
- [ ] Create protected admin route (`/admin`)
- [ ] Build appointment list view with filters
- [ ] Add CRUD operations (view, edit, delete, confirm)
- [ ] Calendar view for visual overview
- [ ] Ability to block time slots

### Phase 4: Email Notification System
- [ ] Create Resend account and get API key
- [ ] Install Resend SDK
- [ ] Create `src/lib/email.ts` service
- [ ] Set up Firebase Cloud Function for email triggers
- [ ] Create email templates:
  - [ ] Appointment created (to client)
  - [ ] New appointment notification (to owner)
  - [ ] Appointment confirmed (to client)
  - [ ] Appointment cancelled (to client)
  - [ ] Appointment reminder - day before (to client, optional)

---

## Email Notification Triggers

| Event | To Owner | To Client |
|-------|----------|-----------|
| Appointment created | ✅ New booking alert | ✅ Confirmation email |
| Appointment confirmed | - | ✅ Confirmation update |
| Appointment cancelled (by owner) | - | ✅ Cancellation notice |
| Appointment cancelled (by client) | ✅ Cancellation alert | ✅ Cancellation confirmation |
| Day before appointment | - | ✅ Reminder (optional) |

---

## Data Model

### Appointment Document (Firestore)
```typescript
interface Appointment {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  serviceType: 'basic' | 'plus' | 'premium';
  serviceName: string;
  dateTime: Timestamp;
  duration: number; // in minutes
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  notes?: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  emailsSent: {
    confirmation?: Timestamp;
    ownerNotification?: Timestamp;
    confirmed?: Timestamp;
    cancelled?: Timestamp;
    reminder?: Timestamp;
  };
}
```

### Blocked Slot Document (Firestore)
```typescript
interface BlockedSlot {
  id: string;
  startDateTime: Timestamp;
  endDateTime: Timestamp;
  reason?: string;
}
```

---

## Folder Structure

```
/src
  ├── lib/
  │   ├── firebase.ts              # Firebase initialization & config
  │   └── email.ts                 # Resend email service
  │
  ├── services/
  │   └── appointments.ts          # Firestore CRUD functions
  │
  ├── components/
  │   ├── BookingCalendar.tsx      # Client-facing booking widget
  │   ├── BookingModal.tsx         # Booking form modal
  │   └── admin/
  │       ├── AdminLayout.tsx      # Admin page wrapper
  │       ├── Login.tsx            # Admin login form
  │       ├── Dashboard.tsx        # Main admin view
  │       ├── AppointmentList.tsx  # Table of appointments
  │       └── AppointmentForm.tsx  # Edit appointment form
  │
  ├── routes/
  │   ├── index.tsx                # Home page (existing)
  │   └── admin.tsx                # Admin route
  │
  └── App.tsx                      # Add router setup
```

---

## Packages to Install

```bash
# Calendar
pnpm add @fullcalendar/core @fullcalendar/daygrid @fullcalendar/timegrid @fullcalendar/interaction

# Routing
pnpm add @solidjs/router

# Email
pnpm add resend

# Firebase is already installed
```

---

## Security Considerations

### Firestore Rules
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Appointments: anyone can create, only admin can read/update/delete
    match /appointments/{appointmentId} {
      allow create: if true;
      allow read, update, delete: if request.auth != null;
    }

    // Blocked slots: only admin
    match /blockedSlots/{slotId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

---

## Open Questions

- [ ] Business hours configuration (hardcoded or configurable?)
- [ ] Appointment duration per service type?
- [ ] Max bookings per time slot?
- [ ] Cancellation policy / time limit?
- [x] Email notifications (SendGrid, Firebase Extensions)? → **Using Resend**

---

## Next Steps

1. Start with Phase 1 - Firebase setup
2. Iterate on this document as we progress
