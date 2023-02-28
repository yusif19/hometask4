namespace hometask4new
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //TASK 1. Verilmis ededler siyahisindaki 3-e bolunen ededlerin ededi oratsini tapan alqoritm
            int[] numbers = { 4, 3, 9, 12, 7, 1 };
            int counter = 0, sum = 0;
            for (int i = 0; i < numbers.Length; i++)
            {
                if (numbers[i] % 3 == 0)
                {
                    counter++;
                    sum += numbers[i];
                }

            }
            Console.WriteLine(sum / counter);
            //TASK 2. Verilmis ededler siyahisinda reqemlerinin sayi 2-den boyuk olan ededlerin cemini tapan alqoritm
            int[] numbers2 = { 14, 3, 19, 12, 7, 11 };
            int sum2 = 0;
            for (int i = 0; i < numbers2.Length; i++)
            {
                if (numbers2[i] >= 100)
                {
                    sum2 += numbers2[i];
                }

            }
            Console.WriteLine(sum2);


            //TASK 3.Vermilmis ededler siyahisindaki en boyuk eded ve en kicik ededin ededi ortasini tapan alqoritm
            double[] numbers3 = { 1.2, 3, 3, 12.4, 7, 10.5 };
            double max = numbers3[0], min = numbers3[0];
            for (int i = 0; i < numbers3.Length; i++)
            {
                if (numbers3[i] > max)
                {
                    max = numbers3[i];
                }
                if (numbers3[i] < min)
                {
                    min = numbers3[i];
                }
            }
            double sum3 = ((max + min) / 2);
            Console.WriteLine(sum3);
            //TASK 4.Verilmis adlar siyahisindaki adi 'A' herfi ile baslayanlarin sayini tapan alqoritm
            string[] strings = { "Aliyev", "Yusif", "Zahid", "Amal" };
            int counter4 = 0;
            for (int i = 0; i < strings.Length; i++)
                if (strings[i][0] == 'A')
                {
                    counter4++;
                }
            Console.WriteLine(counter4);

        }
    }
}
