# 🚀 Front-End Assessment (React.js)
### Build a Mini Blog Application  
**Estimated Time:** 2 Hours  
**Tech Stack:** React.js (Create React App / Vite / Any React setup)

---

## 🎯 Objective
Build a **Mini Blog Application** using React.js that demonstrates your skill in:

- React component design  
- API integration  
- React Router  
- State management  
- Form validation  
- Mobile responsiveness  
- Clean UI & UX  

---

## 📦 Requirements

---

## ✅ 1. Fetch Posts from API

Use this public API:

https://jsonplaceholder.typicode.com/posts


**You must:**
- Fetch posts when the blog list page loads
- Store data using `useState`
- Use `useEffect` for fetching
- Show loading state (optional)
- Show error state (optional)

---

## ✅ 2. Display Blog List

Create a **Blog List Page** (`/` route) that displays all posts as **cards**.

Each blog card must display:
- Title  
- First 100 characters of the body  
- “Read More” button/link  

### UI Requirements:
- Grid layout on desktop (2–3 columns)
- Single column on mobile

---

## ✅ 3. Blog Details Page

Use **React Router** to navigate to:

/blog/:id


When clicking “Read More”:
- Navigate to `/blog/{id}`
- Fetch the selected post by ID
- Display:
  - Title  
  - Full body  
  - Post ID  
  - Back to Home button  

---

## ✅ 4. Create Blog Form

Create a page:

/create


### Form Fields:
| Field | Requirement |
|--------|-------------|
| Title | Required |
| Body | Required, minimum 20 characters |

### Form Requirements:
- Validate inputs
- On submit → Add the new blog to the list (local state only)
- No need to send to API
- Optional success message

---

## ✅ 5. Navigation Bar (Responsive)

Create a Navbar with:
- **Home**
- **Create Post**

### Mobile Requirements:
- Navbar should collapse or stack vertically
- Must be touch-friendly

---

## ✅ 6. Mobile Responsiveness

Entire UI must be responsive.

### Desktop:
- 2–3 column blog grid  
- Spacious layout  

### Mobile:
- Single column  
- Proper spacing and font sizes  
- Responsive navbar  

---
