namespace QuizApi.Models
{
    public class Quiz
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string JoinCode { get; set; } = string.Empty;
        public bool IsActive { get; set; } = false;
    }
}
