export const Filter = ({onChange}) =>(
        <div className="filter-wrapper">
            <select className="filter-height" name="height" onChange={onChange}>
                <option value="0">Select Height</option>
                <option value="100">More than 100 ft</option>
                <option value="200">More than 200 ft</option>
                <option value="300">More than 300 ft</option>
                <option value="400">More than 400 ft</option>
            </select>
        </div>
)