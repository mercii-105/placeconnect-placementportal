# TODO: Connect Frontend Login to Backend and Add Student Registration Form

- [x] Create backend/.env with MONGO_URI=mongodb://localhost:27017
- [x] Add "start": "node server.js" to backend/package.json scripts
- [x] Update components/auth/login-page.tsx to call http://localhost:5000/api/auth/login instead of /api/auth/login
- [x] Create new page app/dashboard/student/register/page.tsx with registration form calling http://localhost:5000/api/students/add
- [x] Add link in app/dashboard/student/page.tsx to navigate to register page
- [x] Remove or update app/api/auth/login/route.ts as it's mock
- [x] Run backend: cd backend && npm start
- [x] Run frontend: npm run dev
- [x] Test login and registration, verify data in MongoDB
