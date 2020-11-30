import { Form, FormControl, Button } from "react-bootstrap";

const Search = () => {
  const HandleSearch = (e) => {
    e.preventDefault();
    const searchInput = e.target.previousSibling.value;

    // loads up OrganizationSearch
    window.location.replace(`/OrganizationSearch/${searchInput}`);
  };

  return (
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success" onClick={HandleSearch}>
        Search
      </Button>
    </Form>
  );
};

export default Search;
