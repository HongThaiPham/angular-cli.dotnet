using System.Reflection;

namespace Shop.Model
{
    public class ProductVersion
    {
        public static string InformationalVersion { get; private set; } = Assembly.GetEntryAssembly().GetCustomAttribute<AssemblyInformationalVersionAttribute>().InformationalVersion.Split('+')[0];
    }
}
