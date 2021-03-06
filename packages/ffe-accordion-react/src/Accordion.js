import React, { Component } from 'react';
import { node, bool, string } from 'prop-types';
import { v4 as uuid } from 'uuid';
import classNames from 'classnames';

class Accordion extends Component {
    constructor() {
        super();
        this.id = uuid();
    }

    render() {
        const { children, isBlue, className, ...rest } = this.props;

        return (
            <div
                {...rest}
                aria-multiselectable="true"
                className={classNames(
                    {
                        'ffe-accordion': true,
                        'ffe-accordion--blue': isBlue,
                    },
                    className,
                )}
                role="tablist"
            >
                {React.Children.map(children, (ele, index) =>
                    React.cloneElement(ele, { uuid: this.id, index }),
                )}
            </div>
        );
    }
}

Accordion.propTypes = {
    /** Accordion items */
    children: node.isRequired,
    /**
     * Use blue Accordion theme - defaults to white . Used internally only.
     * @ignore
     **/
    isBlue: bool,
    /** Extra class names */
    className: string,
};

Accordion.defaultProps = {
    isBlue: false,
};

export default Accordion;
