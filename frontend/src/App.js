import data from './data';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <a href="/">Customs Republic</a>
        </header>
        <main>
          <h1 className="h1">Creating Ideas, Distributing Dreams</h1>
          <div className="products">
            {data.products.map((product) => (
              <div className="product" key={product.slug}>
                <a href={`/product/${product.slug}`}>
                  <img src={product.image} alt={product.name} />
                </a>
                <a href="javascript:void(0)" class="product-info">
                  Browse {product.name}
                </a>
              </div>
            ))}
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
