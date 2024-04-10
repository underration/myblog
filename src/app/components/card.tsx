//'next/image'のコンポーネントをインポートする
import Image from 'next/image'

const Card = (props) => {
  return (
    <Image
      src={props.src}
      //画像のパスをsrcで受け取る
      alt={props.alt}
      //altの文言をaltで受け取る
      width={180}
      height={180}
      className=""
    />
  )
};

export default Card;