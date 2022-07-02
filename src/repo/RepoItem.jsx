import React from 'react';
import folder from "../users/icons/folder.svg"
import { Card, CardActionArea, CardContent, CardMedia } from '@mui/material';

const RepoItem = ({ repo }) => {

    return (
        <div className="container repo-container">
            <Card sx={{ maxWidth: 137, height: 102, backgroundColor: "#141C2F" }}>
                <a className="repo-name" href={repo.html_url}>
                    <CardActionArea>

                        <CardContent>
                            <CardMedia
                                component="img"
                                height="30"
                                image={folder}
                                alt="folder image"
                                sx={{ marginLeft: "-42px" }}
                            />
                            <span>
                                {repo.name}
                            </span>

                        </CardContent>
                    </CardActionArea>
                </a>
            </Card>

        </div>
    )
}

export default RepoItem;
