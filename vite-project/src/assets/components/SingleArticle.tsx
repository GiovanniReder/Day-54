import { Card, Col } from "react-bootstrap"

import IArticle from "../../interfaces/IArticle";
interface SingleArticleProps{
    article: IArticle
}
const SingleArticle=(props:SingleArticleProps)=>{
console.log("INIZIO CARICAMENTO PRIMA CARD")
return(
<Col xs={12} md={4} className="text-center">
      <Card>
        <Card.Img variant="top" src={props.article.image_url} />
        <Card.Body>
          <Card.Title>{props.article.title}</Card.Title>
          <Card.Text>{props.article.summary}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
)
}
export default SingleArticle