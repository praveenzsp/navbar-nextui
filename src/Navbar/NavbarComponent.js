import { Navbar, Link, Text} from "@nextui-org/react";
import { Layout } from "./Layout.js";

// import { AcmeLogo } from "./AcmeLogo.js";

export default function NavbarComponent() {
  const collapseItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    // <Layout>
    //   <Navbar isBordered variant="sticky">
    //     <Navbar.Toggle showIn="xs" />
    //     <Navbar.Brand>
    //       <Text b color="inherit" hideIn="xs">
    //         ACME
    //       </Text>
    //     </Navbar.Brand>
    //     <Navbar.Content
    //       enableCursorHighlight
    //       activeColor="secondary"
    //       hideIn="xs"
    //       variant="highlight-rounded"
    //     >
    //       <Navbar.Link href="#">Features</Navbar.Link>
    //       <Navbar.Link isActive href="#">Customers</Navbar.Link>
    //       <Navbar.Link href="#">Pricing</Navbar.Link>
    //       <Navbar.Link href="#">Company</Navbar.Link>
    //     </Navbar.Content>
        

    //     <Navbar.Collapse>
    //       {collapseItems.map((item, index) => (
    //         <Navbar.CollapseItem
    //           key={item}
    //           activeColor="secondary"
    //           isActive={index === 2}
    //         >
    //           <Link
    //             color="inherit"
    //             css={{
    //               minWidth: "100%",
    //             }}
    //             href="#"
    //           >
    //             {item}
    //           </Link>
    //         </Navbar.CollapseItem>
    //       ))}
    //     </Navbar.Collapse>
    //   </Navbar>
    // </Layout>
    <>
    <Navbar className="navbar" isBordered variant='sticky'>
      <Navbar.Toggle showIn='xs'/>
      <Navbar.Brand>
        <h2>FitMe</h2>
      </Navbar.Brand>

      <Navbar.Content hideIn='xs' >
        <Navbar.Link><h1 style={{fontSize:'30px'}}>About</h1></Navbar.Link>
        <Navbar.Link>Contact</Navbar.Link>
        <Navbar.Link>Profile</Navbar.Link>
        <Navbar.Link>Logout</Navbar.Link>
      </Navbar.Content>

      <Navbar.Collapse>
        <Navbar.CollapseItem>Hello</Navbar.CollapseItem>
        <Navbar.CollapseItem>bye</Navbar.CollapseItem>
        <Navbar.CollapseItem>hii</Navbar.CollapseItem>
        <Navbar.CollapseItem>hola</Navbar.CollapseItem>
        <Navbar.CollapseItem>hey</Navbar.CollapseItem>
        <Navbar.CollapseItem>byee</Navbar.CollapseItem>
        <Navbar.CollapseItem>logout</Navbar.CollapseItem>
      </Navbar.Collapse>
    </Navbar>
    </>
  );
}
