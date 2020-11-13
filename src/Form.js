import React from 'react';

function Form(props) {
    const { values, submit, inputChange, checkboxChange, disabled } = props;

    const onSubmit = evt => {
        evt.preventDefault()
        submit();
    }

    const onInputChange = (evt) => {
        const { name, value} = evt.target
        inputChange(name, value);
    };

    const onCheckboxChange = evt => {
        const { name, checked } = evt.target
        checkboxChange(name, checked);
    }

  

    return(
        <form onSubmit={onSubmit}>
            <div>
                <div>
                    <label>Name:&nbsp;
                        <input
                        value={values.name}
                        onChange={onInputChange}
                        name='name'
                        type='text'
                        />
                
                    </label>
                </div>

                <div>
                    <label>Email:&nbsp;
                        <input
                        value={values.email}
                        onChange={onInputChange}
                        name='email'
                        type='email'
                        />
                
                    </label>
                </div>

                <div>
                    <label>Size:&nbsp;
                    <select
                        name='size'
                        onChange={onInputChange}
                        value={values.role}>
                            <option value=''> -- Select your pizza size -- </option>
                            <option value='mini'>Mini</option>
                            <option value='small'>Small</option>
                            <option value='medium'>Medium</option>
                            <option value='large'>Large</option>
                    </select>
                    </label>
                </div>

                <h3>Toppings</h3>
                <div>
                    <label>Pepperoni&nbsp;
                        <input
                        type='checkbox'
                        name='pepperoni'
                        onChange={onCheckboxChange}
                        checked={values.toppings.pepperoni}
                        />
                    </label>

                    <label>Sausage&nbsp;
                        <input
                        type='checkbox'
                        name='sausage'
                        onChange={onCheckboxChange}
                        checked={values.toppings.sausage}
                        />
                    </label>

                    <label>Beef&nbsp;
                        <input
                        type='checkbox'
                        name='beef'
                        onChange={onCheckboxChange}
                        checked={values.toppings.beef}
                        />
                    </label>

                    <label>Chicken&nbsp;
                        <input
                        type='checkbox'
                        name='chicken'
                        onChange={onCheckboxChange}
                        checked={values.toppings.chicken}
                        />
                    </label>

                    <label>Onion&nbsp;
                        <input
                        type='checkbox'
                        name='onion'
                        onChange={onCheckboxChange}
                        checked={values.toppings.onion}
                        />
                    </label>

                    <label>Bacon&nbsp;
                        <input
                        type='checkbox'
                        name='bacon'
                        onChange={onCheckboxChange}
                        checked={values.toppings.bacon}
                        />
                    </label>

                    <label>Canadian Bacon &nbsp;
                        <input
                        type='checkbox'
                        name='canadianBacon'
                        onChange={onCheckboxChange}
                        checked={values.toppings.canadianBacon}
                        />
                    </label>

                    <label>Spinach&nbsp;
                        <input
                        type='checkbox'
                        name='spinach'
                        onChange={onCheckboxChange}
                        checked={values.toppings.spinach}
                        />
                    </label>

                    <label>Green Pepper&nbsp;
                        <input
                        type='checkbox'
                        name='greenPepper'
                        onChange={onCheckboxChange}
                        checked={values.toppings.greenPepper}
                        />
                    </label>

                    <label>Mushrooms&nbsp;
                        <input
                        type='checkbox'
                        name='mushrooms'
                        onChange={onCheckboxChange}
                        checked={values.toppings.mushrooms}
                        />
                    </label>

                    <label>Pineapple&nbsp;
                        <input
                        type='checkbox'
                        name='pineapple'
                        onChange={onCheckboxChange}
                        checked={values.toppings.pineapple}
                        />
                    </label>

                    <label>Anchovies&nbsp;
                        <input
                        type='checkbox'
                        name='anchovies'
                        onChange={onCheckboxChange}
                        checked={values.toppings.anchovies}
                        />
                    </label>

                    <label>Extra Cheese&nbsp;
                        <input
                        type='checkbox'
                        name='extraCheese'
                        onChange={onCheckboxChange}
                        checked={values.toppings.extraCheese}
                        />
                    </label>
                </div>

                <div>
                    <label>Special Instructions:&nbsp;
                        <input
                        value={values.specialInstructions}
                        onChange={onInputChange}
                        name='specialInstructions'
                        type='text'
                        />
                
                    </label>
                </div>

            

                <div>
                    <button onClick={onSubmit}>Submit</button>
                </div>

            </div>
        </form>
    );
};

export default Form;