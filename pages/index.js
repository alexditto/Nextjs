import Fetch from 'isomorphic-unfetch';
import Layout from "../components/Layout";

const Index = () => {

    return (
        <Layout>
            <div>
                <h1>Welcome</h1>
            </div>
        </Layout>   
    )
};

Index.getInitalProps = async function() {
    const res = await fetch();
    const data = await res.json();

    return data
}

export default Index