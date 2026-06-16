# React Performance Optimization (Healthcare App)

## Overview

This project is a practice application built using React to understand and implement React performance optimization techniques. The application simulates a simple Healthcare Management System with a Dashboard, Patients page, and Doctors page.

The primary focus of this task is learning and applying:

* React Router
* React.lazy()
* Suspense
* useMemo()
* useCallback()
* React.memo()

## Features

### Dashboard

* Displays total number of patients
* Displays total number of doctors
* Demonstrates useMemo() for memoized calculations
* Includes a re-render test button

### Patients Page

* Displays a list of patients using dummy data
* Search functionality for filtering patients
* Uses useMemo() for optimized filtering
* Uses useCallback() for search handler optimization
* Uses React.memo() to prevent unnecessary re-renders of PatientCard components

### Doctors Page

* Displays a list of doctors using dummy data

### Performance Optimization

* Lazy loading implemented for Patients and Doctors pages
* Suspense fallback displayed while loading components
* React.memo used to reduce unnecessary component re-renders
* useMemo used for expensive calculations and filtering
* useCallback used to memoize event handlers

## Technologies Used

* React
* React Router DOM
* JavaScript (ES6+)
* CSS3

## Folder Structure

src/
├── components/
│ └── PatientCard.jsx
├── pages/
│ ├── Dashboard.jsx
│ ├── Patients.jsx
│ └── Doctors.jsx
├── data.js
├── App.js
├── App.css
└── index.js

## Learning Outcomes

Through this project, I learned:

* When and why to use useMemo()
* When and why to use useCallback()
* How React.memo prevents unnecessary re-renders
* How React.lazy and Suspense improve application performance
* How React Router enables navigation without page reloads
* How to observe component rendering behavior using console logs
