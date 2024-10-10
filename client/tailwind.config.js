/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login-pattern': "url('https://imgs.search.brave.com/TInGnGA9J-A1Kvrq5PTMP8KxbFW6xGXVvp_-LiX-ftQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzIxLzEyLzE2/LzM2MF9GXzYyMTEy/MTYyMl83dVQ2bTJH/MTdlNThLYkRKbHRt/aUp5REtCSHZIZEM1/YS5qcGc')",
        'signup-pattern':"url('https://imgs.search.brave.com/4Zve6SLXiLjzSRzEWa_NmtBWbrSwPQ6MdvNw82_kjkc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9tYXNhbGEtZG9z/YS13aXRoLXRhbmd5/LXNhbWJhcl8xMTE0/MDY4LTYzNjY4Lmpw/Zz9zaXplPTYyNiZl/eHQ9anBn')"
      }
    },
  },
  plugins: []
}