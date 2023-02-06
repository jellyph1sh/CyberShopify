import React from 'react';

function Layout() {
  return (
    <div className="App">
      <header className="header">
        <nav className="navbar">
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">About</a>
        </nav>
        <form className="search-form">
          <input type="text" placeholder="Search..." />
          <button type="submit">Search</button>
        </form>
      </header>
      <main className="main">
        <h1>Welcome to our store!</h1>
        <p>Here are our latest products:</p>
        <div className="products">
          <div className="product">
            <img src="#" alt="Product" />
            <h2>Product name</h2>
            <p>$price</p>
            <button>Add to Cart</button>
          </div>
          <div className="product">
            <img src="#" alt="Product" />
            <h2>Product name</h2>
            <p>$price</p>
            <button>Add to Cart</button>
          </div>
          <div className="product">
            <img src="#" alt="Product" />
            <h2>Product name</h2>
            <p>$price</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </main>
      <footer className="footer">
        <p>Copyright &copy; 2023</p>
      </footer>
    </div>
  );
}

export default Layout;
