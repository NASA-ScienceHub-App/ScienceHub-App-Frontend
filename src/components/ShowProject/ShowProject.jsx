import React from "react";

import "./styles.css";
import { Button } from "antd";

export default function ShowProject({ click }) {
    return (
        <div className="show-project-container">
            <div className="title">
                <h2>Nome do Projeto</h2>
                <Button type="primary" onClick={click}>
                    Visualizar Projeto
                </Button>
            </div>
            <div className="descricao">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo eos, corporis repellendus ullam sint cumque
                    voluptatem suscipit a qui dignissimos beatae placeat.
                    Commodi earum praesentium ipsum sequi quisquam fuga
                    rem!Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo eos, corporis repellendus ullam sint cumque
                    voluptatem suscipit a qui dignissimos beatae placeat.
                    Commodi earum praesentium ipsum sequi quisquam fuga rem!
                </p>
            </div>
        </div>
    );
}
