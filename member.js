function skillsmember (member) {
  return member.skills.map(skill => skill.name).join(', ')
}