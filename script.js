document.addEventListener("DOMContentLoaded", () => {
    const skills = document.querySelectorAll('.skills-list li');

    skills.forEach(skill => {
        skill.addEventListener('click', () => {
            alert(`لقد نقرت على ${skill.textContent}`);
        });
    });

    const emailSpan = document.querySelector('#email span');
    emailSpan.addEventListener('click', () => {
        const email = emailSpan.textContent;
        if (confirm(`هل تريد نسخ البريد الإلكتروني: ${email}`)) {
            navigator.clipboard.writeText(email).then(() => {
                alert('تم نسخ البريد الإلكتروني إلى الحافظة!');
            }).catch(err => {
                console.error('فشل في نسخ البريد الإلكتروني: ', err);
            });
        }
    });
});
