import "./App.scss";
import HeaderNav from "./components/HeaderNav";
import FooterView from "./components/Footer";
import { Layout } from "antd";
import "antd/dist/antd.css";
import Nav from "./routes";
import { BrowserRouter, Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const { Content } = Layout;

function App() {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  return (
    <div className={isTabletOrMobile ? "MobileApp" : "App"}>
      <BrowserRouter>
        <Layout
          style={{
            minHeight: window.innerHeight,
            minWidth: window.innerWidth,
            backgroundColor: "#000",
            display: isTabletOrMobile ? "-webkit-inline-flex" : null,
            overflowX: isTabletOrMobile ? "unset" : "unset",
          }}
        >
          <div style={styles.header}>
            <Link
              to={"/"}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={require("./assets/logo.png")}
                style={isTabletOrMobile ? styles.mobileLogo : styles.logo}
                alt="logo"
              />
            </Link>
            <div
              style={{
                backgroundColor: "#000",
                width: isTabletOrMobile ? 20 : "65%",
                marginRight: 20,
              }}
            >
              <HeaderNav />
            </div>
          </div>
          <Content>
            <Nav />
          </Content>
          <div style={styles.footer}>
            <FooterView />
          </div>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;

const styles = {
  header: {
    color: "#fff",
    backgroundColor: "#000000",
    height: "10vh",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    height: 43,
    width: "auto",
    marginRight: 10,
    marginLeft: 30,
  },
  mobileLogo: {
    height: 40,
    width: "auto",
    marginLeft: 30,
  },
  footer: {
    width: "100%",
    color: "#fff",
    backgroundColor: "#000",
    height: "10vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
};
