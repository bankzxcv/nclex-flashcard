# NCLEX Flashcard & Study Guide Platform

A comprehensive web-based study platform designed to help nursing students prepare for the NCLEX exam. This platform combines structured study materials in markdown format with interactive features like flashcards, progress tracking, and confidence assessment.

---

## 🎯 Features

- **📚 Comprehensive Study Guides**: Organized by NCLEX test plan categories
- **🎴 Interactive Flashcards**: Active recall and spaced repetition
- **📊 Progress Tracking**: Monitor your study progress across all topics
- **💪 Confidence Assessment**: Self-evaluate and focus on weak areas
- **📱 Responsive Design**: Study on any device - phone, tablet, or desktop
- **🌙 Dark Mode**: Reduce eye strain during long study sessions
- **📖 GitHub-Readable Content**: Study directly on GitHub or use the interactive website

---

## 📚 Study Content

All study materials are available in the [`content/`](./content/) directory:

### Quick Links
- [**Study Guides Index**](./content/README.md) - Browse all study materials
- [**Flashcard Decks**](./content/flashcards/) - Interactive flashcard sets
- [**Quick Reference Sheets**](./content/quick-reference/) - Essential charts and mnemonics

### NCLEX Test Categories

#### 1. Safe and Effective Care Environment
- [Infection Control & Asepsis](./content/study-guides/safe-effective-care/infection-control.md) ✅
- [Standard & Transmission-Based Precautions](./content/quick-reference/isolation-precautions.md) ✅
- More topics coming soon...

#### 2. Health Promotion and Maintenance
- Coming soon...

#### 3. Psychosocial Integrity
- Coming soon...

#### 4. Physiological Integrity
- [Laboratory Values](./content/study-guides/physiological-integrity/lab-values.md) ✅
- [Medication Administration](./content/study-guides/physiological-integrity/medication-administration.md) ✅
- More topics coming soon...

### Flashcard Decks
- [Laboratory Values](./content/flashcards/lab-values.json) - 50 cards ✅
- [Infection Control](./content/flashcards/infection-control.json) - 30 cards ✅
- More decks coming soon...

---

## 🚀 Getting Started

### For Studying (No Installation Required)

**Option 1: Study on GitHub**
- Browse to the [`content/`](./content/) directory
- Click on any markdown file to read the study guide
- All content is formatted for easy reading on GitHub

**Option 2: Use the Interactive Website** (Coming Soon)
- Visit the deployed website
- Access flashcards, progress tracking, and confidence assessment
- Enjoy interactive features and personalized study experience

### For Local Development

```bash
# Install dependencies
npm install
# or
bun install

# Run development server
npm run dev
# or
bun dev

# Open http://localhost:3000
```

---

## 📖 How to Use This Platform

### Study Guides
1. Browse the [content directory](./content/) or [content index](./content/README.md)
2. Click on topics you want to study
3. Read, take notes, and understand the concepts
4. Use the practice questions at the end of each guide

### Flashcards (Website)
1. Select a flashcard deck by topic
2. Choose study mode:
   - **Study Mode**: Sequential review
   - **Quiz Mode**: Randomized testing
   - **Spaced Repetition**: Intelligent review scheduling
3. Rate your confidence after each card
4. Focus on cards you marked as difficult

### Progress Tracking (Website)
- View your study statistics on the dashboard
- See which topics you've completed
- Track your study streaks and time spent
- Monitor confidence levels across all topics

---

## 🎓 Study Tips

1. **Start with the basics**: Review fundamental concepts before advancing
2. **Use active recall**: Test yourself with flashcards instead of just reading
3. **Space your practice**: Review material over multiple sessions
4. **Track your confidence**: Note which topics need more review
5. **Practice questions**: Apply knowledge through practice scenarios
6. **Join study groups**: Discuss concepts with other nursing students
7. **Focus on weak areas**: Use confidence ratings to prioritize study time

---

## 📋 Project Status

This is an actively developed study platform. Check the [Project Plan](./.claude/PROJECT_PLAN.md) for detailed roadmap.

### Content Status
| Category | Study Guides | Flashcards | Status |
|----------|-------------|------------|--------|
| Safe & Effective Care | 1/15 | 30/200 | 🟡 In Progress |
| Health Promotion | 0/8 | 0/150 | 🔴 Planned |
| Psychosocial Integrity | 0/10 | 0/120 | 🔴 Planned |
| Physiological Integrity | 2/25 | 50/500 | 🟡 In Progress |

### Development Roadmap
- [x] Project planning and structure
- [x] Initial study guide templates
- [x] Sample study guides (Lab Values, Infection Control, Medication Admin)
- [x] Flashcard data structure
- [x] Quick reference sheets
- [ ] Website infrastructure (markdown rendering)
- [ ] Flashcard interface
- [ ] Progress tracking system
- [ ] Confidence assessment
- [ ] Complete content library (500+ flashcards, 50+ study guides)
- [ ] Spaced repetition algorithm
- [ ] Dark mode
- [ ] Search functionality
- [ ] PWA for offline access

---

## 🤝 Contributing

Contributions are welcome! Whether you want to:
- Add study content
- Improve existing guides
- Create new flashcards
- Report errors or suggest improvements

### How to Contribute
1. Fork this repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Commit with descriptive messages
5. Push to your fork
6. Submit a pull request

### Content Guidelines
- Use clear, concise language
- Include examples and clinical scenarios
- Add mnemonics where helpful
- Cite sources when appropriate
- Follow the existing markdown format

---

## 📱 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Content**: Markdown with frontmatter
- **Deployment**: Vercel

---

## 📄 License

This project is created for educational purposes to help nursing students prepare for the NCLEX exam.

---

## 💝 Acknowledgments

This project is dedicated to all nursing students preparing for the NCLEX. Your hard work and dedication to the nursing profession is admirable. Good luck on your exam!

---

## 🔗 Useful Resources

- [NCSBN Official NCLEX Site](https://www.ncsbn.org/nclex.htm)
- [NCLEX-RN Test Plan](https://www.ncsbn.org/testplans.htm)
- [CDC Infection Control](https://www.cdc.gov/infectioncontrol/)
- [Lab Values Reference](https://www.labcorp.com/)

---

**Last Updated**: 2025-11-16

**Star this repository** if you find it helpful! ⭐
