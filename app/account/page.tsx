"use client";
// import { useSession } from "next-auth/react";
// import { redirect } from "next/navigation";
// import React, { useState, useEffect } from "react";
// import { RegistrationForm } from "@/components/auth-registration-form/RegistrationForm";
import { Flex } from "antd";
import { AccountOrders } from "@/components/user-account/account-orders/index.js";
import { UserInfo } from "@/components/user-account/user-info/index.js";

import styles from './account.module.scss';

const UserAccount:React.FC = () => {
  // const { data: session, status } = useSession();

  // const [userName, setUserName] = useState<string>();
  // const [userSecondName, setUserSecondName] = useState<string>();
  // const [userThirdName, setUserThirdName] = useState<string>();
  // const [userEmail, setUserEmail] = useState<string>();
  // const [userPhone, setUserPhone] = useState<string>('добавьте телефон');
  // const [userAddress, setUserAddress] = useState('добавьте адрес доставки');

  // useEffect(() => {
  //   if (status === 'authenticated') {

  //     if (session?.user?.name) {
  //       setUserName(session.user.name);
  //     }

  //     if (session?.user?.secondName) {
  //       setUserSecondName(session.user.secondName)
  //     }

  //     if (session?.user?.thirdName) {
  //       setUserThirdName(session?.user?.thirdName)
  //     }

  //     if (session?.user?.email) {
  //       setUserEmail(session.user.email)
  //     }

  //     if (session?.user?.phone) {
  //       setUserPhone(session.user.phone)
  //     }
  //   } else {
  //     redirect('/')
  //   }
  // }, []);

  return (
    <section>
    <h2 className="section__title">
        Личный кабинет
    </h2>
    <Flex
      justify="space-between"
      align="flex-start"
      style={{paddingTop: 18}}
    >
    <AccountOrders/>
      <div className={styles.account__form}>
        <UserInfo />
      </div>
    </Flex>
    </section>
  )
};

export default UserAccount;