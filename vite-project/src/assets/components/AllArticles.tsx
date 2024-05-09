import { useEffect, useState } from "react"
import { Container, Row } from "react-bootstrap";
import SingleArticle from "./SingleArticle";
import IArticle from "../../interfaces/IArticle";


const AllArticles=()=>{
    // const fetch ="https://api.spaceflightnewsapi.net/v4/articles"
const [articles, setArticles]=useState<IArticle[]>([])
const fetchArticle = async () => {
    try {
      const resp = await fetch("https://api.spaceflightnewsapi.net/v4/articles");
      if (resp.ok) {
        const arrOfArticle = await resp.json();
        setArticles(arrOfArticle);
      } else {
        throw new Error("Errore nella fetch");
      }
    } catch (error) {
      console.log(error);
    }
  }; 
  useEffect(() => {
    fetchArticle();
  }, []);
  return (
    <Container>
      
      <Row className="justify-content-center">
        {articles.map(article => (
          <SingleArticle article={article}/>
        ))}
      </Row>
    </Container>
  );
}
export default AllArticles