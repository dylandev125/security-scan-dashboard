import React, {useState} from 'react';
import Header from '../../components/layout/header'
import Sidebar from '../../components/layout/sidebar'
import Footer from '../../components/layout/footer'

const RootPage = (props) => {
  const [header, setHeader] = useState()

  return (
    <>
      <Header/>
      <Sidebar />
      {props.children}
      <Footer />
    </>
  )
}

export default RootPage;
