import { Card } from "antd";
import React from "react";
import Contributor from "../../components/Contributor/Contributor";
import Statistics from "../../components/Statistics/Statistics";
import "./styles.css";

export default function ViewProject() {
    return (
        <div className="view-project">
            <h1>Nome do Projeto</h1>
            <p className="view-project-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                animi amet saepe. Quaerat ad quis minima iste, ut eos animi ex
                blanditiis voluptate numquam possimus esse inventore molestiae
                odio officia. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quia Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quia Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quia animi amet saepe. Quaerat ad quis minima iste, ut eos
                animi ex blanditiis voluptate numquam possimus esse inventore
                molestiae odio officia. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quia Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quia Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quia animi amet saepe. Quaerat ad quis minima
                iste, ut eos animi ex blanditiis voluptate numquam possimus esse
                inventore molestiae odio officia. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quia Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quia Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quia animi amet saepe. Quaerat ad
                quis minima iste, ut eos animi ex blanditiis voluptate numquam
                possimus esse inventore molestiae odio officia.
            </p>
            <div className="view-project-details">
                <Card title="Membros do Projeto" width={"50%"}>
                    <div className="card-members">
                        <Contributor username={"Nome do membro"} />
                        <Contributor username={"Nome do membro"} />
                        <Contributor username={"Nome do membro"} />
                        <Contributor username={"Nome do membro"} />
                        <Contributor username={"Nome do membro"} />
                        <Contributor username={"Nome do membro"} />
                    </div>
                </Card>

                <Statistics />
            </div>
        </div>
    );
}
