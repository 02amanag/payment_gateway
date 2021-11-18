import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import React, { useState } from 'react';

export default function Home() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    function handelClck() {
        fetch("http://localhost:3000/create-checkout-session", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                items: [
                    { id: 1, quantity: count1 },
                    { id: 2, quantity: count2 },
                ],
            }),
        })
            .then(res => {
                if (res.ok) return res.json()
                return res.json().then(json => Promise.reject(json))
            })
            .then(({ url }) => {
                window.location = url
            })
            .catch(e => {
                console.error(e.error)
            })
    }

    return (
        <div>
            <header className="App-header">
                <Card
                    style={{
                        width: 400,
                        height: 180,
                        backgroundColor: "yellow",
                        marginBottom: 13
                    }}
                >
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Component 1
                        </Typography>
                        <Typography
                            style={{
                                marginBottom: 12,
                                color:"red"
                            }}
                        >
                            US 100$
                        </Typography>

                    </CardContent>
                    <CardActions>
                        <Button size="small" style={{ color: "black", background: "red" }} onClick={() => setCount1(count1 + 1)} >Add</Button>
                        <Button size="small" style={{ color: "black", background: "red" }} onClick={() => setCount1(count1 - 1)}>Remove</Button>
                        <Typography
                            style={{
                                marginLeft: 210,
                            }}
                        >
                            <h1>{count1}</h1>
                        </Typography>
                    </CardActions>
                </Card>

                <Card
                    style={{
                        width: 400,
                        height: 180,
                        backgroundColor: "red",
                        marginBottom: 13
                    }}
                >
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Component 2
                        </Typography>
                        <Typography
                            style={{
                                marginBottom: 12,
                                color:"white"
                            }}
                        >
                            US 200$
                        </Typography>

                    </CardContent>
                    <CardActions>
                        <Button size="small" style={{ color: "yellow", background: "black" }} onClick={() => setCount2(count2 + 1)} >Add</Button>
                        <Button size="small" style={{ color: "yellow", background: "black" }} onClick={() => setCount2(count2 - 1)}>Remove</Button>
                        <Typography
                            style={{
                                marginLeft: 210,
                            }}
                        >
                            <h1>{count2}</h1>
                        </Typography>
                    </CardActions>
                </Card>

                <Button size="large" style={{ color: "red", background: "yellow" }} onClick={handelClck}>CheckOut</Button>
            </header>
        </div>
    );
}