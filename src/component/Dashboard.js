import React from 'react';
import { Button } from '@mui/material';

function Dashboard() {
    return (
        <div>
            <h1>ComplyAI</h1>
            <p className="text-center">Quality assistant</p>
            <div className="button-container">
                <Button
                    variant="contained"
                    className="quality-btn"
                    size="large"
                >
                    Quality procedures
                </Button>
                <br /><br />
                <Button
                    variant="contained"
                    className="quality-btn"
                    size="large"
                >
                    Quality Document
                </Button>
            </div>
        </div>
    );
}

export default Dashboard;
