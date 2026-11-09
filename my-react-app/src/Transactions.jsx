


function Transaction () {

    return (

        <div>
            <h2>Transactions</h2>
            <div></div>
            

            <div>
                <div>
                    <p>Search</p>
                    <input type="search" name="Search" placeholder="Search by Tittle" />
                    <p>Category</p>
                </div>

                <div>
                    <select >   
                        <option>All categories</option>
                        <option>Food and Groceries</option>
                        <option>Transport</option>
                        <option>Bills & Utilities</option>
                        <option>Shoping</option>
                        <option>Health</option>
                        <option>Salary</option>
                        <option>Freelance</option>                    
                        <option>Others</option>                    
                    </select>
                </div>

                <div>
                    <p>Type</p>
                    <select>
                        <option>All</option>
                        <option>Income</option>
                        <option>Expenses</option>
                    </select>
                </div>

                <div>
                    <p>From</p>
                    <input type="date" name="Date" />
                </div>

                <div>
                    <p>To</p>
                    <input type="date" name="Date" />
                </div>

                <div>
                    <p>Sort by</p>
                    <select>
                        <option>Newest First</option>
                        <option>Oldest First</option>
                        <option>Amount: high-low</option>
                        <option>Amount: low-high</option>
                        <option></option>
                    </select>
                </div>

            </div>
        </div>
    )
};


export default Transaction;