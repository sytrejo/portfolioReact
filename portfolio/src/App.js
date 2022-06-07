import React, {useState} from "react";

function App(){
  const [pages] = useState([

  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Header>
        <Nav
        pages = {pages}
        setCurrentPage = {setCurrentPage}
        currentPage = {currentPage}
        ></Nav>
      </Header>

      <main>
        <Page currentPage = {currentPage}></Page>
      </main>
      <Footer />

    </div>
  );
}

export default App;
