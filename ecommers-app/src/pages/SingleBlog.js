import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import { HiOutlineArrowLeft } from "react-icons/hi";
import blog from '../images/blog-1.jpg';
import Container from '../components/Container';


const SingleBlog = () => {
    return (
        <>
            <Meta title='Dynamic Blog Name' />
            <BreadCrumb title='Dynamic Blog Name' />
            <Container class1="blog-wrapper home-wrapper-2 py-5">
                    <div className="row">
                        <div className="col-12">
                            <div className="single-blog-card">
                                <Link to='/blogs' className='d-flex align-items-center gap-10'><HiOutlineArrowLeft className='fs-5'/> Go back to blogs</Link>
                                <h3>A Beautiful Sunday Morning Renaissance</h3>
                                <img className='img-fluid w-100 my-4' src={blog} alt="blog" />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A exercitationem beatae ipsum et quos nesciunt nostrum porro at qui assumenda iure deleniti commodi, dolor consequatur vero deserunt odit, amet est tempore? Corporis vel nihil ducimus reiciendis atque, iure distinctio suscipit inventore fuga quidem nemo officia expedita nam tempora, quae porro at eaque voluptatibus incidunt id molestiae? Alias quibusdam veritatis exercitationem consequuntur nisi ut natus ex neque nam doloremque magnam ullam blanditiis, dolorem, tenetur fugiat nostrum earum dicta ab repellat enim! Ducimus doloribus dicta soluta facilis maiores at. Id ab recusandae et delectus dolore distinctio dignissimos reprehenderit fugit libero minima. Quaerat veniam culpa ea debitis amet! Dolorem quos quia labore, ex in enim dolorum sint cum eaque? Harum, in! Nostrum unde iusto, ducimus quia expedita ab repellendus magni omnis, in voluptates ad! Eveniet recusandae earum magni ex quos. Sequi similique mollitia deserunt beatae dolores totam voluptas dolorem commodi. Ad iure, et reprehenderit iste ipsa accusantium ratione unde similique culpa nobis consequatur natus quidem aut exercitationem quaerat, quod, quas neque itaque veritatis. Voluptates dolor exercitationem, iure error ipsa quas explicabo excepturi minima suscipit libero dolorem nulla distinctio illum. Eos minus beatae neque ut cumque! Itaque beatae non laboriosam, iste libero obcaecati laborum nihil distinctio culpa dignissimos accusantium. Tempora, porro cumque dolore aut, error asperiores exercitationem tenetur tempore soluta voluptates neque perferendis laboriosam, expedita recusandae temporibus eligendi? Est culpa rerum nemo nihil molestiae cupiditate mollitia eligendi similique ullam debitis non officia natus, voluptas ipsa laudantium officiis exercitationem placeat saepe perferendis quas! Delectus qui laboriosam quod sit itaque in repudiandae tempore ad laborum magnam voluptate distinctio minima, amet ducimus ratione placeat obcaecati natus corrupti consectetur. Esse blanditiis voluptas animi similique maxime illum expedita veniam vero pariatur! Dignissimos, ut sunt beatae, natus quis reprehenderit consequatur aliquid, sit facilis doloremque voluptates esse quam voluptatem maxime eius.</p>
                            </div>
                        </div>
                    </div>
            </Container>
        </>
    )
}

export default SingleBlog