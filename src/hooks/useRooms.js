import { graphql, useStaticQuery } from 'gatsby';

const useRooms = () => {

    const data = useStaticQuery(graphql`
        query {
            allDatoCmsRoom{
                nodes {
                    title
                    id
                    slug
                    content
                    image {
                        fluid (maxWidth: 1200) {
                            ...GatsbyDatoCmsFluid
                        }
                    }
                }
            }
        }
    `);

    return data.allDatoCmsRoom.nodes.map(room => ({
        title: room.title,
        id: room.id,
        slug: room.slug,
        image: room.image,
        content: room.content
    }));
}
 
export default useRooms;