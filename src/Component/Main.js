import React from 'react';
import Title from './Title'
import PhotoWall from './PhotoWall';
import { Route } from 'react-router-dom';
import AddPhoto from './AddPhoto';




class Main extends React.Component
{
    constructor()
    {
        super();
        this.state=({
            posts : []
        })
        this.removePhoto=this.removePhoto.bind(this);
        console.log('constructor')
    }
  removePhoto(photoRemoved){
      console.log(photoRemoved.id);
      console.log(this.state.posts.filter(item=>item!==photoRemoved))
      this.setState((state)=>({posts:state.posts.filter(item=>item!==photoRemoved)}))
  }

  componentDidMount()
  {
      const data=this.simulateFetchFromDatabase();
      this.setState({posts:data})
      console.log('componentDidmount')
  }

  simulateFetchFromDatabase()
  {
      return [{
        id: "0",
        description: "beautiful landscape",
        imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
        "3919321_1443393332_n.jpg"
        }, {
        id: "1",
        description: "Aliens???",
        imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg"
        }, {
        id: "2",
        description: "On a vacation!",
        imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
        }]
  }

  render(){
      return(
          <div>
              <Route exact path="/" render={()=>(<div>
                  <Title title={"Photo Wall"}/>
                  <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto}/>
              </div>)} />
              <Route exact path='/AddPhoto' component={AddPhoto}/>
          </div>
      )
  }
}
export default Main;