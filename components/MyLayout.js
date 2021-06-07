import Header from './Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '2px solid #000000',
  outline: 'black solid 1000px',
}

// imports Header pages in the layoutStyle above, index will import this
export default function Layout(props) {
  return (
    <div style={layoutStyle}>
      <Header />
      {props.children}
      <div className="fixed"> <img src="../static/IMG_4152.png" width='12%' height='12%' /> </div>
    </div>

    
  )
}
