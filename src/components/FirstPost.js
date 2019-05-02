import React, { Component } from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'

const LatestPost = styled.div`
    text-align:center;
    margin:70px 0px 30px;
    h1{
        // width:80%;
        // margin:0px auto 0px;
    }
    .category{
        margin:35px 0px 50px;
        a{
            color:#929292;
            margin:0px 5px;
            transition:all 0.4s ease;
            font-size:20px;
            &:hover{
                color:#3a3a3a;
                text-decoration:none;
            }
        }
    }
    // img{
    //     width:100%;
    //     max-height:350px;
    //     object-fit:cover;
    // }
`

export default class FirstPost extends Component {
    render() {
        const data = this.props.data;
    return (
      <LatestPost>
        <div className="uk-container uk-container-small">
            <div className="uk-margin">
                <ul className="uk-iconnav uk-flex-center">
                    {data.categories && data.categories.map(
                            category => <li><Link key={category.id} to={'categories/'+ category.slug}><small className="uk-badge uk-light" dangerouslySetInnerHTML={{__html:category.name + " "}} /> </Link></li>
                        )
                    }
                </ul>
            </div>
            <Link to={'post/' + data.slug}>
                <h1 className="uk-margin">{data.title}</h1>
            </Link>
            
            <Link to={'post/' + data.slug}>
            <div class="uk-cover-container uk-height-medium">
                <img src={data.featured_media.localFile.childImageSharp.original.src} alt='' uk-cover="" />
            </div>            
            </Link>            
        </div>
      </LatestPost>
    )
  }
}
