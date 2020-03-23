const Table = ({list}) => {
    return (
        <table>
            <ul>
                <tr key="tableheadings">
                    <th>Id</th>
                    <th>Price</th>
                    <th>Name</th>
                    <th>Quantity</th>
                </tr>
                {
                    list.map(ele => 
                        <tr key={ele.id}>
                            <td>{ele.id}</td> 
                            <td>{ele.name}</td>
                            <td>{ele.price}</td>
                            <td>{ele.qty}</td>
                        </tr>    
                   )
                }
            </ul>
        </table>
    );
};