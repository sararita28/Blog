import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="smallHeaderTitle"> React & Node</span>
        <span className="largeHeaderTitle">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/6052776/pexels-photo-6052776.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        alt=""
      />
    </div>
  );
}
