import * as React from 'react';

const Detail = () => (
    <div>
        <form>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    readOnly
                />
            </div>
            <div>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                />
            </div>
            <button type="submit"
                    className="btn">
                Save
            </button>
        </form>
    </div>
);
export { Detail };