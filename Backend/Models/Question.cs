namespace QuizApi.Models
{
    public class Question
    {
        public int Id { get; set; }
        public int QuizId { get; set; }  // ������� ����
        public string Text { get; set; } = string.Empty;
        public List<string> Options { get; set; } = new();
        public int CorrectOptionIndex { get; set; }
    }
}
