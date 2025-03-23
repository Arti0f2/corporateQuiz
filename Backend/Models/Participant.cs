namespace QuizApi.Models
{
    public class Participant
    {
        public int Id { get; set; }
        public int QuizId { get; set; }
        public string Name { get; set; } = string.Empty;
        public int Score { get; set; } = 0;
    }
}
