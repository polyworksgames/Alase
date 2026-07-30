require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8000;

// ─── View Engine ────────────────────────────────────────────────
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ─── Static Files ───────────────────────────────────────────────
app.use(express.static(path.join(__dirname, 'public')));

// ─── Routes ─────────────────────────────────────────────────────

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Alase Center for Enrichment | Healing Minds, Hearts and Souls',
        description: 'Alase Center for Enrichment provides comprehensive peer support, re-entry services, and enrichment programs to help individuals transform their lives and build lasting independence.',
        activePage: 'home'
    });
});

app.get('/director', (req, res) => {
    res.render('director', {
        title: 'Executive Director | Anthony Smith, Ph.D. | Alase Center for Enrichment',
        description: 'Meet Dr. Anthony Smith, Ph.D., Executive Director and Founder of Alase Center for Enrichment — 25+ years of clinical experience in mental health services.',
        activePage: 'about'
    });
});

app.get('/careers', (req, res) => {
    res.render('careers', {
        title: 'Careers | Alase Center for Enrichment',
        description: 'Join the Alase Center for Enrichment team. Explore career opportunities in mental health and peer support services.',
        activePage: 'about'
    });
});

app.get('/reentry', (req, res) => {
    res.render('reentry', {
        title: 'Re-Entry Services | Alase Center for Enrichment',
        description: 'Comprehensive re-entry services to help individuals returning to the community after incarceration build stable, productive lives.',
        activePage: 'services'
    });
});

app.get('/sexoffender', (req, res) => {
    res.render('sexoffender', {
        title: 'Sex Offender Services | Alase Center for Enrichment',
        description: 'Specialized, evidence-based treatment and community integration support for registered sex offenders.',
        activePage: 'services'
    });
});

app.get('/resources', (req, res) => {
    res.render('resources', {
        title: 'Resources | Alase Center for Enrichment',
        description: 'Helpful resources for mental health, re-entry, and community support.',
        activePage: 'resources'
    });
});

app.get('/staff', (req, res) => {
    res.render('staff', {
        title: 'Staff | Alase Center for Enrichment',
        description: 'Meet the dedicated team at Alase Center for Enrichment.',
        activePage: 'about'
    });
});

app.get('/privacy-policy', (req, res) => {
    res.render('privacy-policy', {
        title: 'Privacy Policy | Alase Center for Enrichment',
        description: 'Read the Alase Center for Enrichment Privacy Policy.',
        activePage: ''
    });
});

app.get('/terms-of-service', (req, res) => {
    res.render('terms-of-service', {
        title: 'Terms of Service | Alase Center for Enrichment',
        description: 'Read the Alase Center for Enrichment Terms of Service.',
        activePage: ''
    });
});

// ─── 404 Handler ────────────────────────────────────────────────
app.use((req, res) => {
    res.status(404).render('index', {
        title: 'Page Not Found | Alase Center for Enrichment',
        description: 'Page not found.',
        activePage: ''
    });
});

// ─── Start Server ────────────────────────────────────────────────
app.listen(PORT, () => {
    console.log(`🌟 Alase Center for Enrichment server running at http://localhost:${PORT}`);
});
