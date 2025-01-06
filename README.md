
# 🌟 Simple Calculator Application  

A **web-based calculator** that allows you to perform arithmetic calculations, view history and export it as a `.txt` file.  

## ✨ Features  

✅ Perform basic arithmetic calculations (addition, subtraction, multiplication, division).  
✅ User-friendly interface with interactive buttons.  
✅ View and save calculation history using browser `localStorage`.  
✅ Export calculation history to a `.txt` file via a REST API.  

---

## 🖥️ Demo  

### 🎛️ Calculator Interface  
Perform real-time calculations and view results instantly!  

### 📄 Export History  
Save your calculation history as a `.txt` file with one click.  

---

## 🗂️ Project Structure  

```plaintext  
project3/  
├── exports/                # Directory for exported files  
│   └── history.txt         # File containing exported calculation history  
├── public/                 # Frontend files  
│   ├── history.html        # HTML for history page  
│   ├── history.js          # JS for managing history display  
│   ├── index.html          # Main HTML file for the calculator  
│   ├── index.js            # Frontend logic for calculator operations  
│   └── styles.css          # CSS for styling  
├── .gitignore              # Git ignore rules  
├── .prettierrc             # Prettier configuration for consistent formatting  
├── index.js                # Backend server with REST API implementation  
├── package.json            # Project metadata and dependencies  
└── package-lock.json       # Detailed dependency tree  
```  

---

## 🛠️ Technologies Used  

### **Frontend**  
🎨 **HTML**: Structure for the calculator and history pages.  
🎨 **CSS**: Styling for a visually appealing interface.  
⚡ **JavaScript**: Dynamic functionality like calculations and local storage.  

### **Backend**  
⚙️ **Node.js**: Runtime environment for the backend.  
⚙️ **Express.js**: REST API for exporting calculation history.  
⚙️ **File System Module**: Save and serve calculation history as a file.  

---

## ⚙️ Installation  

1. Clone the repository:  
   ```bash  
   git clone https://github.com/lucklesssabbir/calculator.git  
   ```  

2. Navigate to the project directory:  
   ```bash  
   cd calculator
   ```  

3. Install dependencies:  
   ```bash  
   npm install  
   ```  

4. Start the server:  
   ```bash  
   npm start  
   ```  

5. Open your browser and navigate to:  
   [http://localhost:3012](http://localhost:3012)  

---

## 🌐 API Endpoints  

### **Export History**  
📤 **POST** `/exportHistory`  

**Request Body**:  
```json  
{  
  "history": ["3+5=8", "10/2=5"]  
}  
```  

**Responses**:  
- ✅ **200**: File is available for download.  
- ⚠️ **400**: No history provided.  
- ❌ **500**: Server error.  

---

## 🖱️ How to Use  

1. **Perform calculations** using the calculator interface.  
2. **View your history** stored in the browser (accessible on the history page).  
3. **Export your history** by clicking the "Export History" button.  

---

## 🚀 Future Enhancements  

🌟 Add support for more advanced mathematical operations.  
🌟 Enhance UI/UX for better accessibility and appearance.  
🌟 Implement user authentication for personalized history storage.  

---

## ✍️ Author  

Developed with ❤️ by **MD Sabbir Hossen**.  

Feel free to contribute or share your feedback!  
