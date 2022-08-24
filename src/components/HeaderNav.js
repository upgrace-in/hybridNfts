import { Button, Menu } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const HeaderNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [defaultSelectedKeys, setdefaultSelectedKeys] = useState([""]);
  const [openKeys, setopenKeys] = useState();
  const [selectedKeys, setselectedKeys] = useState();

  useEffect(() => {
    setdefaultSelectedKeys([location.pathname.substring(1)]);
    setselectedKeys([location.pathname.substring(1)]);
  }, [location]);

  function getItem(label, key, children) {
    return {
      key,
      children,
      label,
    };
  }

  const RenderButton = ({ text, item }) => {
    return (
      <Link to={`/${item}`}>
        <Button type="link" style={{ color: "white", padding: 0 }}>
          {text}
        </Button>
      </Link>
    );
  };

  const menu = [
    getItem(<RenderButton text="Overview" item="overview" />, "overview"),
    getItem(
      <RenderButton text="HyHu Raffles" item="hyhu-raffles" />,
      "hyhu-raffles"
    ),
    getItem(
      <RenderButton text="HyHu Gaming Tables" item="gaming-tables" />,
      "gaming-tables"
    ),
    getItem(<RenderButton text="FAQ" item="faq" />, "faq"),
    getItem(<RenderButton text="Gallery" item="gallery" />, "gallery"),
    getItem(
      <RenderButton text="Merchandise" item="merchandise" />,
      "merchandise"
    ),
    getItem(
      <RenderButton text="Access All Areas" item="access-all-areas" />,
      "access-all-areas"
    ),
    getItem(<RenderButton text="Mint" item="mint" />, "mint"),
  ];

  const onPressSideMenu = (item) => {
    setselectedKeys(item.key);
    navigate("/" + item.key);
  };

  const onOpenChange = (item) => {
    setopenKeys(item);
  };

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={defaultSelectedKeys}
      selectedKeys={selectedKeys}
      openKeys={openKeys}
      onOpenChange={(item) => onOpenChange(item)}
      onClick={(item) => onPressSideMenu(item)}
      items={menu}
      style={{ backgroundColor: "#000", justifyContent: "flex-end" }}
    />
  );
};

export default HeaderNav;
