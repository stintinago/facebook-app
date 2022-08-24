import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavbarBrand, Form, FormGroup, Input,} from 'reactstrap';
import fbLogo from './images/fb-nav-log.PNG'
function App() {
  return (
    <div className="App">
      <Navbar className="nav-facebook nav-shadow" color="faded" light>

          <div className="d-flex flex-rowc mx-1">
            <img
              alt=''
              src={fbLogo}
              style={{ height: 40, width: 40 }}
            />

            <Form >
              <FormGroup className=" mx-2">
              <i class="fa fa-home"></i>
                <Input style={{ height: '40px' }} className="facebook-search" type="text" name="search" id="search" placeholder="Buscar en Facebook" />
              </FormGroup>
            </Form>
          </div>

      </Navbar>
    </div>
  );
}

export default App;
