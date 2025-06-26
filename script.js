/* General Styles */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Navigation */
header {
    background: #333;
    color: white;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav ul {
    list-style: none;
    display: flex;
    gap: 20px;
}

nav ul li a {
    text-decoration: none;
    color: white;
    font-weight: bold;
}

#menu-toggle {
    display: none;
    font-size: 24px;
    cursor: pointer;
}

/* Hero Section */
#home {
    background: url('images/hero.jpg') no-repeat center center/cover;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
}

.hero-content h2 {
    font-size: 3rem;
}

.btn {
    background: #ff5733;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    text-decoration: none;
    font-size: 1rem;
}

/* Services */
#services {
    padding: 50px;
    text-align: center;
    background: #f4f4f4;
}

.service-container {
    display: flex;
    justify-content: center;
    gap: 20px;
}

.service-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Contact */
#contact {
    text-align: center;
    padding: 50px;
    background: #222;
    color: white;
}

form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 400px;
    margin: auto;
}

form input, form textarea {
    width: 100%;
    padding: 10px;
}

.btn:hover {
    background: #ff4500;
}

/* Responsive */
@media (max-width: 768px) {
    #menu-toggle {
        display: block;
    }
    
    nav ul {
        display: none;
        flex-direction: column;
    }
    
    nav ul.show {
        display: flex;
    }
}