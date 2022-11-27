/* eslint-disable @next/next/no-img-element */
import { Toolbar } from "../components/toolbar";
import styles from "../styles/eom.module.css";

const eom = ({ employee }) => {
  return (
    <div className="page-container">
      <Toolbar />
      <div className={styles.main}>
        <h1>Employee of the Month</h1>

        <div className={styles.employeeOfTheMonth}>
          <h1>{employee.name}</h1>
          <h4>{employee.position}</h4>
          <img src={employee.image} alt="" />
          <p>{employee.description}</p>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const apiResponse = await fetch(
    "https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth"
  );
  const employee = await apiResponse.json();

  return {
    props: {
      employee,
    },
  };
};

export default eom;
